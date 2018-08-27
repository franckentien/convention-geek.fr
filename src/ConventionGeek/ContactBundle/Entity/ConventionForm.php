<?php

namespace ConventionGeek\ContactBundle\Entity;

use ConventionGeek\EventBundle\Entity\BaseConvention as BaseConvention;
use Doctrine\ORM\Mapping as ORM;


/**
 * ConventionForm
 *
 * @ORM\Table(name="ConventionForm")
 * @ORM\Entity(repositoryClass="ConventionGeek\ContactBundle\Repository\ConventionFormRepository")
 *
 */
class ConventionForm extends BaseConvention
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
     * @var string
     *
     * @ORM\Column(name="eventid", type="string", length=255)
     *
     */
    private $eventid;

    public function getEventid()
    {
        return $this->eventid;
    }

    /**
     * @param string $eventid
     */
    public function setEventid(string $eventid)
    {
        $this->eventid = $eventid;
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

    /**
     * toString
     *
     * @return string
     */
    public function __toString()
    {
        return strval($this->eventid);
    }



}

