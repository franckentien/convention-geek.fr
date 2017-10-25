<?php

namespace ConventionGeek\EventBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Departement
 *
 * @ORM\Table(name="departement")
 * @ORM\Entity(repositoryClass="ConventionGeek\EventBundle\Repository\DepartementRepository")
 */
class Departement
{

    /**
     * @var string
     * @ORM\Id
     * @ORM\Column(name="id", type="string", length=3, unique=true)
     */
    private $departementCode;

    /**
     * @var string
     *
     * @ORM\Column(name="departement_nom", type="string", length=255)
     */
    private $departementNom;


    /**
     * Set departementCode
     *
     * @param string $departementCode
     *
     * @return Departement
     */
    public function setDepartementCode($departementCode)
    {
        $this->departementCode = $departementCode;

        return $this;
    }

    /**
     * Get departementCode
     *
     * @return string
     */
    public function getDepartementCode()
    {
        return $this->departementCode;
    }

    /**
     * Set departementNom
     *
     * @param string $departementNom
     *
     * @return Departement
     */
    public function setDepartementNom($departementNom)
    {
        $this->departementNom = $departementNom;

        return $this;
    }

    /**
     * Get departementNom
     *
     * @return string
     */
    public function getDepartementNom()
    {
        return $this->departementNom;
    }
}

