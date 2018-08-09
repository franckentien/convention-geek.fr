<?php


namespace ConventionGeek\EventBundle\Model;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

abstract class Convention implements ConventionInterface
{

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255)
     */
    protected $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="site", type="string", length=255, nullable=true)
     * @Assert\Url()
     */
    protected $site;

    /**
     * @var string
     *
     * @ORM\Column(name="facebook", type="string", length=255, nullable=true)
     */
    protected $facebook;

    /**
     * @var string
     *
     * @ORM\Column(name="twitter", type="string", length=255, nullable=true)
     */
    protected $twitter;

    /**
     * @var string
     *
     * @ORM\Column(name="lieu", type="string", length=255, nullable=true)
     */
    protected $lieu;

    /**
     * @ORM\ManyToOne(targetEntity="ConventionGeek\EventBundle\Entity\Departement")
     *
     * @ORM\JoinColumn(nullable=false)
     */
    protected $departement;

    /**
     * @var string
     *
     * @ORM\Column(name="meta", type="string", length=160)
     */
    protected $meta;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    protected $description;

    /**
     * @var bool
     *
     * @ORM\Column(name="actif", type="boolean")
     */
    protected $actif = true;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     * @Assert\Email(checkMX=true)
     */
    protected $email;

    /**
     * {@inheritdoc}
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * {@inheritdoc}
     */
    public function setSite($site)
    {
        $this->site = $site;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getSite()
    {
        return $this->site;
    }

    /**
     * {@inheritdoc}
     */
    public function setFacebook($facebook)
    {
        $this->facebook = $facebook;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getFacebook()
    {
        return $this->facebook;
    }

    /**
     * {@inheritdoc}
     */
    public function setTwitter($twitter)
    {
        $this->twitter = $twitter;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    /**
     * {@inheritdoc}
     */
    public function setLieu($lieu)
    {
        $this->lieu = $lieu;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getLieu()
    {
        return $this->lieu;
    }

    /**
     * {@inheritdoc}
     */
    public function setDepartement($departement)
    {
        $this->departement = $departement;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getDepartement()
    {
        return $this->departement;
    }

    /**
     * {@inheritdoc}
     */
    public function setMeta($meta)
    {
        $this->meta = $meta;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * {@inheritdoc}
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * {@inheritdoc}
     */
    public function setActif($actif)
    {
        $this->actif = $actif;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getActif()
    {
        return $this->actif;
    }

    /**
     * {@inheritdoc}
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getEmail()
    {
        return $this->email;
    }

}