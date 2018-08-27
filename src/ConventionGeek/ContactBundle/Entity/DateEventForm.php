<?php

namespace ConventionGeek\ContactBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ConventionGeek\EventBundle\Entity\BaseDateEvent as BaseDateEvent;

/**
 * DateEvent
 *
 * @ORM\Table(name="date_eventForm")
 * @ORM\Entity(repositoryClass="ConventionGeek\EventBundle\Repository\DateEventRepository")
 */
class DateEventForm extends BaseDateEvent
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
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    public function __toString()
    {
        return $this->getEvenement();
    }

}

