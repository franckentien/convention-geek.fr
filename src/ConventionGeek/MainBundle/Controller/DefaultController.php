<?php

namespace ConventionGeek\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{

    public function aboutAction()
    {
        return $this->render('@ConventionGeekMain/default/about.html.twig', []);
    }

    public function irlEventAction()
    {
        return $this->render('@ConventionGeekMain/Structures/irlEventLayout.html.twig', []);
    }


}
