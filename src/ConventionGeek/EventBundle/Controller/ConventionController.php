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
                'date'   => $date,
                'name' => $convention->getNom(),
                'place'  => $convention->getLieu(),
                'informateur' => $informateur ));
        }

        return $listEvent;
    }

    public function getAllEvent(){
        $repositoryConvention = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:Convention')
        ;

        $listEvents = $repositoryConvention->findAll();

        $result = array();

        foreach ($listEvents as $event) {
            array_push($result, array(
                'nom'   => $event->getNom(),
                'lieu' => $event->getLieu(),
                'departement' => $event->getDepartement() ));
        }


    }

    public function ConventionsAction()
    {
        $listEvent = $this->getAllNextDates();

        return $this->render('conventionGeek/conventions.html.twig', array('listEvenement' => $listEvent));
    }

    public function AnnuaireAction(){

        return $this->render('conventionGeek/annuaire.html.twig');
    }
}
