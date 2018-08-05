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

        $convention = $repositoryConvention->findOneBy(array('eventid' => $eventid));

        $infoEvent = array(
            'eventmeta'   => $convention->getMeta(),
            'eventname'   => $convention->getNom(),
            'eventlieu' => $convention->getLieu(),
            'eventdepartement' => $convention->getDepartement(),
            'eventwebsite' => $convention->getSite(),
            'eventfacebook' => $convention->getFacebook(),
            'eventtwitter' => $convention->getTwitter(),
            'eventdescription' => $convention->getDescription(),
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
