<?php

namespace ConventionGeek\EventBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Convention
 *
 * @ORM\Table(name="convention")
 * @ORM\Entity(repositoryClass="ConventionGeek\EventBundle\Repository\ConventionRepository")
 */
class Convention
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
     * @ORM\Column(name="eventid", type="string", length=255, unique=true)
     *
     */
    private $eventid;
    //TODO Be unique


    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="site", type="string", length=255, nullable=true)
     * @Assert\Url()
     */
    private $site;

    /**
     * @var string
     *
     * @ORM\Column(name="facebook", type="string", length=255, nullable=true)
     */
    private $facebook;

    /**
     * @var string
     *
     * @ORM\Column(name="twitter", type="string", length=255, nullable=true)
     */
    private $twitter;

    /**
     * @var string
     *
     * @ORM\Column(name="lieu", type="string", length=255, nullable=true)
     */
    private $lieu;

    /**
     * @ORM\ManyToOne(targetEntity="ConventionGeek\EventBundle\Entity\Departement")
     *
     * @ORM\JoinColumn(nullable=false)
     */
    private $departement;

    /**
     * @var string
     *
     * @ORM\Column(name="meta", type="string", length=160)
     */
    private $meta;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var bool
     *
     * @ORM\Column(name="actif", type="boolean")
     */
    private $actif = true;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     * @Assert\Email(checkMX=true)
     */
    private $email;




    /**
     * Set nom
     *
     * @param string $nom
     *
     * @return Convention
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set site
     *
     * @param string $site
     *
     * @return Convention
     */
    public function setSite($site)
    {
        $this->site = $site;

        return $this;
    }

    /**
     * Get site
     *
     * @return string
     */
    public function getSite()
    {
        return $this->site;
    }

    /**
     * Set facebook
     *
     * @param string $facebook
     *
     * @return Convention
     */
    public function setFacebook($facebook)
    {
        $this->facebook = $facebook;

        return $this;
    }

    /**
     * Get facebook
     *
     * @return string
     */
    public function getFacebook()
    {
        return $this->facebook;
    }

    /**
     * Set twitter
     *
     * @param string $twitter
     *
     * @return Convention
     */
    public function setTwitter($twitter)
    {
        $this->twitter = $twitter;

        return $this;
    }

    /**
     * Get twitter
     *
     * @return string
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    /**
     * Set lieu
     *
     * @param string $lieu
     *
     * @return Convention
     */
    public function setLieu($lieu)
    {
        $this->lieu = $lieu;

        return $this;
    }

    /**
     * Get lieu
     *
     * @return string
     */
    public function getLieu()
    {
        return $this->lieu;
    }

    /**
     * Set departement
     *
     * @param string $departement
     *
     * @return Convention
     */
    public function setDepartement($departement)
    {
        $this->departement = $departement;

        return $this;
    }

    /**
     * Get departement
     *
     * @return string
     */
    public function getDepartement()
    {
        return $this->departement;
    }

    /**
     * Set meta
     *
     * @param string $meta
     *
     * @return Convention
     */
    public function setMeta($meta)
    {
        $this->meta = $meta;

        return $this;
    }

    /**
     * Get meta
     *
     * @return string
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Convention
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set actif
     *
     * @param boolean $actif
     *
     * @return Convention
     */
    public function setActif($actif)
    {
        $this->actif = $actif;

        return $this;
    }

    /**
     * Get actif
     *
     * @return bool
     */
    public function getActif()
    {
        return $this->actif;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return Convention
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @return string
     */
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

