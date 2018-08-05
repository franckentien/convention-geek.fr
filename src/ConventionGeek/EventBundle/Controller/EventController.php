<?php

namespace ConventionGeek\EventBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ConventionGeek\EventBundle\Utils\DateFormatClass;

class EventController extends Controller
{
    public function getInfoEvent($eventid){


        $infoEvent = array(
            'eventid'   => $eventid,
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
