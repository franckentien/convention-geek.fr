<?php


namespace ConventionGeek\EventBundle\Model;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

abstract class DateEvent implements DateEventInterface
{
    /**
     * @ORM\ManyToOne(targetEntity="ConventionGeek\EventBundle\Entity\Convention")
     *
     * @ORM\JoinColumn(nullable=false)
     */
    protected $evenement;

    /**
     * @var int
     *
     * @ORM\Column(name="edition", type="smallint")
     * @Assert\Range(min = 0)
     */
    protected $edition;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_debut", type="date", nullable=true)
     * @Assert\Date()
     *
     */
    protected $dateDebut;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_fin", type="date")
     * @Assert\Date()
     *
     */
    protected $dateFin;

    /**
     * @var int
     *
     * @ORM\Column(name="visiteurs", type="integer", nullable=true)
     */
    protected $visiteurs;


    /**
     * @ORM\ManyToOne(targetEntity="Application\Sonata\UserBundle\Entity\User")
     *
     * @ORM\JoinColumn(nullable=true)
     */
    protected $informateur;

    //TODO Add place for specifique edition

    /**
     * {@inheritdoc}
     */
    public function setEvenement($evenement)
    {
        $this->evenement = $evenement;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getEvenement()
    {
        return $this->evenement;
    }

    /**
     * {@inheritdoc}
     */
    public function setEdition($edition)
    {
        $this->edition = $edition;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getEdition()
    {
        return $this->edition;
    }

    /**
     * {@inheritdoc}
     */
    public function setDateDebut($dateDebut)
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getDateDebut()
    {
        return $this->dateDebut;
    }

    /**
     * {@inheritdoc}
     */
    public function setDateFin($dateFin)
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getDateFin()
    {
        return $this->dateFin;
    }

    /**
     * {@inheritdoc}
     */
    public function setVisiteurs($visiteurs)
    {
        $this->visiteurs = $visiteurs;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getVisiteurs()
    {
        return $this->visiteurs;
    }

    /**
     * {@inheritdoc}
     */
    public function setInformateur($informateur)
    {
        $this->informateur = $informateur;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getInformateur()
    {
        return $this->informateur;
    }

    /**
     * {@inheritdoc}
     */
    public function __toString() {
        return $this->evenement . "";
    }

}
