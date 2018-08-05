<?php

namespace ConventionGeek\EventBundle\Controller;


use Sonata\NewsBundle\Controller\PostController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ConventionGeek\EventBundle\Utils\DateFormatClass;

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

            $convention = $repositoryConvention->findOneBy(array('eventid' => strval($event->getEvenement())));

            $informateur = '-';
            if($event->getInformateur()!==null){
                $informateur = $event->getInformateur();
            };

            array_push($listEvent, array(
                'date'   => $date,
                'name' => $convention->getNom(),
                'place'  => $convention->getLieu(),
                'informateur' => $informateur ));
        }

        return $listEvent;
    }

    public function indexAction()
    {

        $listEvent = $this->getDates();

        return $this->render('@ConventionGeekEvent/eventList/index.html.twig', array('listEvenement' => $listEvent));
    }

}
