<?php

namespace ConventionGeek\EventBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{



    private function getDisplayDate($DateDebut, $DateFin){

        //TODO Copie Android Script
        $jourDebut = date_format($DateDebut, 'd') ;
        $jourFin = date_format($DateFin, 'd');
        return $jourDebut . '-' .$jourFin;
    }


    private function getEvent(){

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:DateEvent')
        ;

        $listDateEvents = $repository->findAll();

        $listEvent = array();

        foreach ($listDateEvents as $event) {

            $date = $this->getDisplayDate($event->getDateDebut(), $event->getDateFin());

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
