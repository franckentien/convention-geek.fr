<?php


namespace ConventionGeek\EventBundle\Model;

interface ConventionInterface
{
    /**
     * Set nom
     *
     * @param string $nom
     *
     */
    public function setNom($nom);

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom();

    /**
     * Set site
     *
     * @param string $site
     *
     */
    public function setSite($site);

    /**
     * Get site
     *
     * @return string
     */
    public function getSite();
    /**
     * Set facebook
     *
     * @param string $facebook
     *
     */
    public function setFacebook($facebook);

    /**
     * Get facebook
     *
     * @return string
     */
    public function getFacebook();
    /**
     * Set twitter
     *
     * @param string $twitter
     *
     */
    public function setTwitter($twitter);


    /**
     * Get twitter
     *
     * @return string
     */
    public function getTwitter();

    /**
     * Set lieu
     *
     * @param string $lieu
     *
     */
    public function setLieu($lieu);

    /**
     * Get lieu
     *
     * @return string
     */
    public function getLieu();

    /**
     * Set departement
     *
     * @param string $departement
     *
     */
    public function setDepartement($departement);

    /**
     * Get departement
     *
     * @return string
     */
    public function getDepartement();

    /**
     * Set meta
     *
     * @param string $meta
     *
     */
    public function setMeta($meta);

    /**
     * Get meta
     *
     * @return string
     */
    public function getMeta();

    /**
     * Set description
     *
     * @param string $description
     *
     */
    public function setDescription($description);

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription();

    /**
     * Set actif
     *
     * @param boolean $actif
     *
     */
    public function setActif($actif);

    /**
     * Get actif
     *
     * @return bool
     */
    public function getActif();

    /**
     * Set email
     *
     * @param string $email
     *
     */
    public function setEmail($email);
    /**
     * Get email
     *
     * @return string
     */
    public function getEmail();
    /**
     * @return string
     */
    public function getEventid();

    /**
     * @param string $eventid
     */
    public function setEventid(string $eventid);

    /**
     * Get id
     *
     * @return int
     */
    public function getId();

    /**
     * toString
     *
     * @return string
     */
    public function __toString();

}