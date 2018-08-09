<?php

namespace ConventionGeek\EventBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ConventionGeek\EventBundle\Utils\DateFormatClass;

class ConventionController extends Controller
{
    public function getAllNextDates(){

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

        $listDateEvents = $repositoryDate->findAllDateAfterToday();

        $listEvent = array();

        foreach ($listDateEvents as $event) {

            $date = DateFormatClass::getDisplayDate($event->getDateDebut(), $event->getDateFin());

            $convention = $repositoryConvention->findOneBy(array('eventid' => strval($event->getEvenement())));

            $informateur = '-';
            if($event->getInformateur()!==null){
                $informateur = $event->getInformateur();
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

    public function conventionsAction()
    {
        $listEvent = $this->getAllNextDates();

        return $this->render('@ConventionGeekEvent/eventList/conventions.html.twig', array('listEvenement' => $listEvent));
    }

}
