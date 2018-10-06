<?php

namespace ConventionGeek\EventBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ConventionGeek\EventBundle\Utils\DateFormatClass;

class EventController extends Controller
{
    public function getInfoEvent($eventid){

        $repositoryConvention = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:Convention')
        ;

        $repositoryDate = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:DateEvent')
        ;

        $convention = $repositoryConvention->findOneBy(array('eventid' => $eventid));

        if($convention === null ){
            throw $this->createNotFoundException('Cet événement n\'existe pas');
        }


        $editionrepository = $repositoryDate->findBy(array('evenement' => $convention->getid()), array('id' => 'DESC'));

        $editionlist = array();

        foreach ($editionrepository as $edition) {

            $date = DateFormatClass::getDisplayDate($edition->getDateDebut(), $edition->getDateFin());

            $convention = $repositoryConvention->findOneBy(array('id' => $edition->getEvenement()->getid()));

            array_push($editionlist, array(
                'edition'   => $edition->getEdition(),
                'date' => $date,
                'visiteurs' => $edition->getVisiteurs()
            ));
        }

        $infoEvent = array(
            'eventmeta'   => $convention->getMeta(),
            'eventname'   => $convention->getNom(),
            'eventlieu' => $convention->getLieu(),
            'eventdepartement' => $convention->getDepartement(),
            'eventwebsite' => $convention->getSite(),
            'eventfacebook' => $convention->getFacebook(),
            'eventtwitter' => $convention->getTwitter(),
            'eventdescription' => $convention->getDescription(),
            'eventdatelist' => $editionlist
        );

        return $infoEvent;

    }

    public function eventAction($eventid)
    {

        $infoEvent = $this->getInfoEvent($eventid);

        return $this->render('@ConventionGeekEvent/eventList/event.html.twig',  array(
            'event' => $infoEvent
        ));




    }

}
