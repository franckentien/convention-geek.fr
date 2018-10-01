<?php

namespace ConventionGeek\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class SitemapController extends Controller
{



    public function sitemapIndexAction()
    {
        // return response in XML format
        $response = new Response(
            $this->renderView('@ConventionGeekMain/sitemap/sitemapIndex.html.twig'),
            200
        );
        $response->headers->set('Content-Type', 'text/xml');

        return $response;
    }

    public function sitemapMainAction()
    {
        $urls = array();

        //Index
        $urls[] = array('loc' => $this->generateUrl('App_home'), 'changefreq' => 'weekly', 'priority' => '1.0');
        //Annuaire
        $urls[] = array('loc' => $this->generateUrl('CGEvent_annuaire'), 'changefreq' => 'monthly', 'priority' => '0.3');
        //Convention
        $urls[] = array('loc' => $this->generateUrl('CGEvent_conventions'), 'changefreq' => 'weekly', 'priority' => '0.4');
        //Formulaire
        $urls[] = array('loc' => $this->generateUrl('CGEvent_formulaires'), 'changefreq' => 'yearly', 'priority' => '0.5');
        //About
        $urls[] = array('loc' => $this->generateUrl('App_about'), 'changefreq' => 'yearly', 'priority' => '0.2');

        // return response in XML format
        $response = new Response(
            $this->renderView('@ConventionGeekMain/sitemap/sitemapMain.html.twig',
                array( 'urls' => $urls)),
            200
        );
        $response->headers->set('Content-Type', 'text/xml');

        return $response;
    }

    public function sitemapEventAction()
    {

        $em = $this->getDoctrine()->getManager();
        $urls = array();

        foreach ($em->getRepository('ConventionGeekEventBundle:Convention')->findAll() as $event) {

            $urls[] = array(
                'loc' => $this->generateUrl('CGEvent_event', array('eventid' => strval($event->getEventid()))),
                'changefreq' => 'yearly'
            );
        }

        // return response in XML format
        $response = new Response(
            $this->renderView('@ConventionGeekMain/sitemap/sitemapMain.html.twig',
                array( 'urls' => $urls)),
            200
        );
        $response->headers->set('Content-Type', 'text/xml');

        return $response;
    }

    public function sitemapNewsAction()
    {

        //TODO à Revoir quand articles dispo sur le site.

        $urls = array();

        //News Archive
        $urls[] = array('loc' => $this->generateUrl('sonata_news_archive'), 'changefreq' => 'monthly');


        // return response in XML format
        $response = new Response(
            $this->renderView('@ConventionGeekMain/sitemap/sitemapMain.html.twig',
                array( 'urls' => $urls)),
            200
        );
        $response->headers->set('Content-Type', 'text/xml');

        return $response;
    }



}
