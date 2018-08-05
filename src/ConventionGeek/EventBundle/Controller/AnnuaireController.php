<?php

namespace ConventionGeek\EventBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ConventionGeek\EventBundle\Utils\DateFormatClass;

class AnnuaireController extends Controller
{


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

        return $result;
    }

    public function annuaireAction(){

        $listEvent = $this->getAllEvent();

        return $this->render('@ConventionGeekEvent/eventList/annuaire.html.twig', array('listEvenement' => $listEvent));
    }
}
