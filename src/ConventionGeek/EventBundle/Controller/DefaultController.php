<?php

namespace ConventionGeek\EventBundle\Controller;

use ConventionGeek\EventBundle\ConventionGeekEventBundle;
use ConventionGeek\EventBundle\Utils\DateFormatClass;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{






    private function getEvent(){

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:DateEvent')
        ;

        $listDateEvents = $repository->findAll();

        $listEvent = array();

        foreach ($listDateEvents as $event) {

            $date = DateFormatClass::getDisplayDate($event->getDateDebut(), $event->getDateFin());

            array_push($listEvent, array(
                'date'   => $date,
                'name' => $event->getEvenement(),
                'place'  => 'place',
                'informateur' => 'informateur'));
        }

        return $listEvent;
    }

    public function indexAction()
    {

        $listEvent = $this->getEvent();


        return $this->render('default/index.html.twig', array('listEvenement' => $listEvent));
    }
}
