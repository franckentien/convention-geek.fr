<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{

    public function aboutAction()
    {
        return $this->render('default/about.html.twig', []);
    }

    public function irlEventAction()
    {
        return $this->render('conventionGeek/irlEvent.html.twig', []);
    }



}
