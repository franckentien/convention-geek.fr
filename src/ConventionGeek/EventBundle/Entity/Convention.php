<?php

namespace ConventionGeek\EventBundle\Entity;

use ConventionGeek\ContactBundle\Entity\ConventionForm;
use ConventionGeek\EventBundle\Entity\BaseConvention as BaseConvention;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * Convention
 *
 * @ORM\Table(name="convention")
 * @ORM\Entity(repositoryClass="ConventionGeek\EventBundle\Repository\ConventionRepository")
 * @UniqueEntity("eventid")
 */
class Convention extends BaseConvention
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

    /**
     * Convention constructor.
     * @param ConventionForm $conventionForm
     */
    public function __construct(ConventionForm $conventionForm = null)
    {
        if($conventionForm !== null){
            $this->eventid = $conventionForm->getEventid();
            $this->nom = $conventionForm->getNom();
            $this->lieu = $conventionForm->getLieu();
            $this->departement = $conventionForm->getDepartement();
            $this->meta = $conventionForm->getMeta();
            $this->description = $conventionForm->getDescription();

            $this->actif = $conventionForm->getActif();
            $this->site = $conventionForm->getSite();
            $this->facebook = $conventionForm->getFacebook();
            $this->twitter = $conventionForm->getTwitter();
            $this->email = $conventionForm->getEmail();
        }


    }



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
        return $this->getEventid();
    }

}

