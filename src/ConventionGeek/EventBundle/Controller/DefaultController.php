<?php

namespace ConventionGeek\EventBundle\Controller;

use ConventionGeek\EventBundle\ConventionGeekEventBundle;
use ConventionGeek\EventBundle\Utils\DateFormatClass;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{

    private function getEvent(){

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



        $listDateEvents = $repositoryDate->findAll();

        $listEvent = array();

        foreach ($listDateEvents as $event) {

            $date = DateFormatClass::getDisplayDate($event->getDateDebut(), $event->getDateFin());

            $convention = $repositoryConvention->findOneBy(array('eventid' => strval($event->getEvenement())));

            array_push($listEvent, array(
                'date'   => $date,
                'name' => $convention->getNom(),
                'place'  => $event->getEvenement(),
                'informateur' => $event->getInformateur()));
                //TODO return - if null
        }

        return $listEvent;
    }

    public function indexAction()
    {

        $listEvent = $this->getEvent();


        return $this->render('default/index.html.twig', array('listEvenement' => $listEvent));
    }
}
