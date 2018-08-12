<?php

namespace ConventionGeek\ContactBundle\Controller;

use ConventionGeek\ContactBundle\Entity\Contact;
use ConventionGeek\ContactBundle\Form\Type\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{

    public function formulairesAction(Request $request){

        $contact = new Contact();
        $formContact   = $this->get('form.factory')->create(ContactType::class, $contact);


        if ($request->isMethod('POST') && $formContact->handleRequest($request)->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($contact);
            $em->flush();

            return $this->render('@ConventionGeekContact/formulaires/formulaires.twig', array('form' => $formContact->createView(), 'toast' => true));
        }

        return $this->render('@ConventionGeekContact/formulaires/formulaires.twig', array('form' => $formContact->createView(), 'toast' => false) );
    }

}
