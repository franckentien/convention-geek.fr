<?php

namespace ConventionGeek\EventBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ConventionGeek\EventBundle\Utils\DateFormatClass;

class IndexController extends Controller
{

    public function getEvent(){

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
                'place'  => $event->getEvenement(),
                'informateur' => $informateur ));
        }

        return $listEvent;
    }


    public function indexAction()
    {

        $listEvent = $this->getEvent();

        return $this->render('default/index.html.twig', array('listEvenement' => $listEvent));
    }

}
