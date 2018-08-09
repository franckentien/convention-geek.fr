<?php


namespace ConventionGeek\EventBundle\Model;

interface DateEventInterface
{


    /**
     * Set evenement
     *
     * @param string $evenement
     *
     */
    public function setEvenement($evenement);

    /**
     * Get evenement
     *
     * @return string
     */
    public function getEvenement();
    /**
     * Set edition
     *
     * @param integer $edition
     *
     */
    public function setEdition($edition);

    /**
     * Get edition
     *
     * @return int
     */
    public function getEdition();

    /**
     * Set dateDebut
     *
     * @param \DateTime $dateDebut
     *
     */
    public function setDateDebut($dateDebut);

    /**
     * Get dateDebut
     *
     * @return \DateTime
     */
    public function getDateDebut();

    /**
     * Set dateFin
     *
     * @param \DateTime $dateFin
     *
     */
    public function setDateFin($dateFin);
    /**
     * Get dateFin
     *
     * @return \DateTime
     */
    public function getDateFin();
    /**
     * Set visiteurs
     *
     * @param integer $visiteurs
     *
     */
    public function setVisiteurs($visiteurs);

    /**
     * Get visiteurs
     *
     * @return int
     */
    public function getVisiteurs();

    /**
     * Set informateur
     *
     * @param string $informateur
     *
     */
    public function setInformateur($informateur);

    /**
     * Get informateur
     *
     * @return string
     */
    public function getInformateur();

    /**
     * toString
     *
     * @return string
     */
    public function __toString();

}
