<?php

namespace ConventionGeek\EventBundle\Controller;

use ConventionGeek\EventBundle\Model\Convention;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\View;
use Nelmio\ApiDocBundle\Annotation\Model;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use ConventionGeek\EventBundle\Utils\DateFormatClass;
use Swagger\Annotations as SWG;
use Nelmio\ApiDocBundle\Annotation\Security;

class ApiController extends Controller
{

    /**
     * @Get(
     *     path = "/next-events",
     *     name = "cg_next_events",
     * )
     * @View
     */
    public function apiIndexAction()
    {
        $repositoryDate = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:DateEvent')
        ;

        $repositoryConvention = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:Convention')
        ;

        $listDateEvents = $repositoryDate->findDateForIndex();

        $listEvent = array();

        foreach ($listDateEvents as $event) {

            $convention = $repositoryConvention->findOneBy(array('id' => $event->getEvenement()->getid()));

            $informateur = '-';
            if($event->getInformateur()!==null){
                $informateur = $event->getInformateur()->getUsername();
            };

            array_push($listEvent, array(
                'eventid' => $convention->getEventid(),
                'datedebut' => $event->getDateDebut(),
                'datefin' => $event->getDateFin(),
                'name' => $convention->getNom(),
                'place'  => $convention->getLieu(),
                'informateur' => $informateur ));
        }

        return $listEvent;

    }


    /**
     * @Get(
     *     path = "/full-next-events",
     *     name = "cg_full_next_events",
     * )
     * @View
     */
    public function apiConventionAction()
    {
        $repositoryDate = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:DateEvent')
        ;

        $repositoryConvention = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:Convention')
        ;

        $listDateEvents = $repositoryDate->findAllDateAfterToday();

        $listEvent = array();

        foreach ($listDateEvents as $event) {

            $convention = $repositoryConvention->findOneBy(array('eventid' => strval($event->getEvenement())));

            $informateur = '-';
            if($event->getInformateur()!==null){
                $informateur = $event->getInformateur()->getUsername();
            };

            array_push($listEvent, array(
                'eventid' => $convention->getEventid(),
                'datedebut' => $event->getDateDebut(),
                'datefin' => $event->getDateFin(),
                'name' => $convention->getNom(),
                'place'  => $convention->getLieu(),
                'informateur' => $informateur ));
        }

        return $listEvent;
    }

    /**
     * @Get(
     *     path = "/annuaire",
     *     name = "cg_annuaire",
     * )
     * @View
     */
    public function apiAnnuaireAction()
    {
        $repositoryConvention = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:Convention')
        ;

        $listEvents = $repositoryConvention->findBy(array(), array('departement' => 'ASC'));

        $result = array();

        foreach ($listEvents as $event) {
            array_push($result, array(
                'eventid' => $event->getEventid(),
                'nom'   => $event->getNom(),
                'lieu' => $event->getLieu(),
                'departement' => $event->getDepartement() ));
        }

        return $result;
    }

    /**
     * @Get(
     *     path = "/event/{eventid}",
     *     name = "cg_event",
     * )
     * @View
     */
    public function apiEventAction($eventid)
    {
        $repositoryConvention = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:Convention')
        ;

        $repositoryDate = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('ConventionGeekEventBundle:DateEvent')
        ;

        $convention = $repositoryConvention->findOneBy(array('eventid' => $eventid));

        if($convention === null ){
            throw $this->createNotFoundException('Cet événement n\'existe pas');
        }


        $editionrepository = $repositoryDate->findBy(array('evenement' => $convention->getid()), array('edition' => 'DESC'));

        $editionlist = array();

        foreach ($editionrepository as $edition) {

            array_push($editionlist, array(
                'edition'   => $edition->getEdition(),
                'datedebut' => $edition->getDateDebut(),
                'datefin' => $edition->getDateFin(),
                'visiteurs' => $edition->getVisiteurs()
            ));
        }

        $infoEvent = array(
            'eventmeta'   => $convention->getMeta(),
            'eventname'   => $convention->getNom(),
            'eventlieu' => $convention->getLieu(),
            'eventdepartement' => $convention->getDepartement(),
            'eventwebsite' => $convention->getSite(),
            'eventfacebook' => $convention->getFacebook(),
            'eventtwitter' => $convention->getTwitter(),
            'eventdescription' => $convention->getDescription(),
            'eventdatelist' => $editionlist
        );

        return $infoEvent;

    }

}
