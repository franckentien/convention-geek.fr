<?php

namespace ConventionGeek\ContactBundle\Controller;

use ConventionGeek\EventBundle\Entity\Convention;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{

    public function ImportConventionAction($idform) {

        $em = $this->getDoctrine()->getManager();

        $repositoryConventionForm = $em->getRepository('ConventionGeekContactBundle:ConventionForm')        ;

        $eventform = $repositoryConventionForm->findOneBy(array('id' => $idform));

        $newconvention= new Convention($eventform);

        $em->persist($newconvention);
        $em->flush();

        $newid = $newconvention->getId();

        $em->remove($eventform);
        $em->flush();

        return $this->redirect($this->generateUrl('admin_conventiongeek_event_convention_edit', array('id' => $newid) ));

    }

    public function ImportDateEventAction() {


        //return $this->redirect($this->generateUrl('fos_user_security_login'));
        return $this->redirect($this->generateUrl('admin_conventiongeek_event_dateevent_edit', array('id' => '2')));


    }

}
