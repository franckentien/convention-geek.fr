<?php

namespace ConventionGeek\ContactBundle\Controller;

use ConventionGeek\ContactBundle\Entity\Contact;
use ConventionGeek\ContactBundle\Entity\ConventionForm;
use ConventionGeek\ContactBundle\Entity\DateEventForm;
use ConventionGeek\ContactBundle\Form\Type\ContactType;
use ConventionGeek\ContactBundle\Form\Type\ConventionType;
use ConventionGeek\ContactBundle\Form\Type\DateEventType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{

    public function formulairesAction(Request $request){

        $contact = new Contact();
        $formContact   = $this->get('form.factory')->create(ContactType::class, $contact);

        $convention = new ConventionForm();
        $formConvention  = $this->get('form.factory')->create(ConventionType::class, $convention);

        $dateevent = new DateEventForm();
        $formDateEvent  = $this->get('form.factory')->create(DateEventType::class, $dateevent);

        $toast = false;


        if($request->isMethod('POST')){
            if ($formContact->handleRequest($request)->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($contact);
                $em->flush();

            }
            if ($formConvention->handleRequest($request)->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($convention);
                $em->flush();

            }
            if ($formDateEvent->handleRequest($request)->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($dateevent);
                $em->flush();
            }
        }



        return $this->render('@ConventionGeekContact/formulaires/formulaires.twig',
            array('contactform' => $formContact->createView(),
                'conventionform' => $formConvention->createView(),
                'dateeventform' => $formDateEvent->createView(),
                ) );
    }

}
