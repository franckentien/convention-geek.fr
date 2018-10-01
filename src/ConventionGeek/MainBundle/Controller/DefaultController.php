<?php

namespace ConventionGeek\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{

    public function aboutPageAction()
    {
        return $this->render('@ConventionGeekMain/Default/about.html.twig', []);
    }

    public function irlEventAction()
    {
        return $this->render('@ConventionGeekMain/Default/irlEvent.html.twig', []);
    }

}
