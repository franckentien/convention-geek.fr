<?php

namespace ConventionGeek\ContactBundle\Controller;

use ConventionGeek\ContactBundle\Entity\Contact;
use ConventionGeek\ContactBundle\Form\ContactType;
use ConventionGeek\EventBundle\Entity\Convention;
use ConventionGeek\EventBundle\Entity\DateEvent;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{

    public function formulairesAction(){

        $contact = new Contact();
        //$formContact   = $this->get('form.factory')->create(ContactType::class, $contact);


        return $this->render('@ConventionGeekContact/formulaires/formulaires.twig');
    }

}
