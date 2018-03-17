<?php

namespace ConventionGeek\EventBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * DateEvent
 *
 * @ORM\Table(name="date_event")
 * @ORM\Entity(repositoryClass="ConventionGeek\EventBundle\Repository\DateEventRepository")
 */
class DateEvent
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
     * @ORM\ManyToOne(targetEntity="ConventionGeek\EventBundle\Entity\Convention")
     *
     * @ORM\JoinColumn(nullable=false)
     */
    private $evenement;

    /**
     * @var int
     *
     * @ORM\Column(name="edition", type="smallint")
     */
    private $edition;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_debut", type="date")
     */
    private $dateDebut;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_fin", type="date")
     */
    private $dateFin;

    /**
     * @var int
     *
     * @ORM\Column(name="visiteurs", type="integer", nullable=true)
     */
    private $visiteurs;


    //TODO Add user integration

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
     * Set evenement
     *
     * @param string $evenement
     *
     * @return DateEvent
     */
    public function setEvenement($evenement)
    {
        $this->evenement = $evenement;

        return $this;
    }

    /**
     * Get evenement
     *
     * @return string
     */
    public function getEvenement()
    {
        return $this->evenement;
    }

    /**
     * Set edition
     *
     * @param integer $edition
     *
     * @return DateEvent
     */
    public function setEdition($edition)
    {
        $this->edition = $edition;

        return $this;
    }

    /**
     * Get edition
     *
     * @return int
     */
    public function getEdition()
    {
        return $this->edition;
    }

    /**
     * Set dateDebut
     *
     * @param \DateTime $dateDebut
     *
     * @return DateEvent
     */
    public function setDateDebut($dateDebut)
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    /**
     * Get dateDebut
     *
     * @return \DateTime
     */
    public function getDateDebut()
    {
        return $this->dateDebut;
    }

    /**
     * Set dateFin
     *
     * @param \DateTime $dateFin
     *
     * @return DateEvent
     */
    public function setDateFin($dateFin)
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    /**
     * Get dateFin
     *
     * @return \DateTime
     */
    public function getDateFin()
    {
        return $this->dateFin;
    }

    /**
     * Set visiteurs
     *
     * @param integer $visiteurs
     *
     * @return DateEvent
     */
    public function setVisiteurs($visiteurs)
    {
        $this->visiteurs = $visiteurs;

        return $this;
    }

    /**
     * Get visiteurs
     *
     * @return int
     */
    public function getVisiteurs()
    {
        return $this->visiteurs;
    }

    public function __toString() {
        return $this->evenement . "";
    }
}

