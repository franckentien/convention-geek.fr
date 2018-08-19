<?php

namespace ConventionGeek\EventBundle\Entity;

use ConventionGeek\ContactBundle\Entity\DateEventForm;
use Doctrine\ORM\Mapping as ORM;
use ConventionGeek\EventBundle\Entity\BaseDateEvent as BaseDateEvent;

/**
 * DateEvent
 *
 * @ORM\Table(name="date_event")
 * @ORM\Entity(repositoryClass="ConventionGeek\EventBundle\Repository\DateEventRepository")
 */
class DateEvent extends BaseDateEvent
{

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * DateEvent constructor.
     * @param DateEventForm $dateEvent
     */
    public function __construct(DateEventForm $dateEvent = null)
    {
        if($dateEvent !== null){
            $this->evenement = $dateEvent->getEvenement();
            $this->edition = $dateEvent->getEdition();
            $this->dateDebut = $dateEvent->getDateDebut();
            $this->dateFin = $dateEvent->getDateFin();
            $this->visiteurs = $dateEvent->getVisiteurs();
            $this->informateur = $dateEvent->getInformateur();
        }


    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

}

