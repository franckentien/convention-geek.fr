<?php

namespace ConventionGeek\EventBundle\Controller;


use ConventionGeek\ContactBundle\Entity\ConventionForm;
use ConventionGeek\ContactBundle\Entity\DateEventForm;
use ConventionGeek\ContactBundle\Form\Type\ConventionType;
use ConventionGeek\ContactBundle\Form\Type\DateEventType;
use Sonata\NewsBundle\Controller\PostController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ConventionGeek\EventBundle\Utils\DateFormatClass;
use Symfony\Component\HttpFoundation\Request;

class IndexController extends Controller
{

    public function getDates(){

        $repositoryDate = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:DateEvent')
        ;

        $repositoryConvention = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:Convention')
        ;

        $listDateEvents = $repositoryDate->findDateForIndex();

        $listEvent = array();

        foreach ($listDateEvents as $event) {

            $date = DateFormatClass::getDisplayDate($event->getDateDebut(), $event->getDateFin());

            $convention = $repositoryConvention->findOneBy(array('id' => $event->getEvenement()->getid()));

            $informateur = '-';
            if($event->getInformateur()!==null){
                $informateur = $event->getInformateur()->getUsername();
            };

            array_push($listEvent, array(
                'eventid' => $convention->getEventid(),
                'date'   => $date,
                'name' => $convention->getNom(),
                'place'  => $convention->getLieu(),
                'informateur' => $informateur ));
        }

        return $listEvent;
    }

    public function indexAction(Request $request)
    {

        $listEvent = $this->getDates();

        $convention = new ConventionForm();
        $formConvention  = $this->get('form.factory')->create(ConventionType::class, $convention);

        $dateevent = new DateEventForm();
        $formDateEvent  = $this->get('form.factory')->create(DateEventType::class, $dateevent);

        $snackbarMessage = null ;

        if($request->isMethod('POST')){
            if ($formConvention->handleRequest($request)->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($convention);
                $em->flush();
                $snackbarMessage = "La convention a bien a bien été envoyé.";

            }
            if ($formDateEvent->handleRequest($request)->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($dateevent);
                $em->flush();
                $snackbarMessage = "La date a bien a bien été envoyé.";
            }
        }

        return $this->render('@ConventionGeekEvent/eventList/index.html.twig',
            array('listEvenement' => $listEvent,
                'conventionform' => $formConvention->createView(),
                'dateeventform' => $formDateEvent->createView(),
                'snackbarMessage' => $snackbarMessage,
            )
        );
    }

}
