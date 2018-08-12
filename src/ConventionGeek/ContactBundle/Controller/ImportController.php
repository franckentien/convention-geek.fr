<?php

namespace ConventionGeek\ContactBundle\Controller;

use ConventionGeek\EventBundle\Entity\Convention;
use ConventionGeek\EventBundle\Entity\DateEvent;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ImportController extends Controller
{

    public function importConventionAction($idform) {

        $em = $this->getDoctrine()->getManager();

        $repositoryConventionForm = $em->getRepository('ConventionGeekContactBundle:ConventionForm');

        $eventform = $repositoryConventionForm->findOneBy(array('id' => $idform));

        $newconvention= new Convention($eventform);

        $em->persist($newconvention);
        $em->flush();

        $newid = $newconvention->getId();

        $em->remove($eventform);
        $em->flush();

        return $this->redirect($this->generateUrl('admin_conventiongeek_event_convention_edit', array('id' => $newid) ));

    }

    public function importDateEventAction($idform) {

        $em = $this->getDoctrine()->getManager();

        $repositoryDateEventForm = $em->getRepository('ConventionGeekContactBundle:DateEventForm');

        $dateform = $repositoryDateEventForm->findOneBy(array('id' => $idform));

        $newDateEvent = new DateEvent($dateform);

        $em->persist($newDateEvent);
        $em->flush();

        $newid = $newDateEvent->getId();

        $em->remove($dateform);
        $em->flush();


        return $this->redirect($this->generateUrl('admin_conventiongeek_event_dateevent_edit', array('id' => $newid)));


    }

}
