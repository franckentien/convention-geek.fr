<?php

namespace ConventionGeek\ContactBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{

    public function ImportConventionAction() {


        //return $this->redirect($this->generateUrl('fos_user_security_login'));
        return $this->redirect($this->generateUrl('sonata_admin_dashboard'));


    }

    public function ImportDateEventAction() {


        //return $this->redirect($this->generateUrl('fos_user_security_login'));
        return $this->redirect($this->generateUrl('sonata_admin_dashboard'));


    }

}
