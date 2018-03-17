<?php

// src/Admin/ContactAdmin.php
namespace ConventionGeek\EventBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class DateEventAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper->add('evenement')
            ->add('edition')
            ->add('dateDebut')
            ->add('dateFin')
            ->add('visiteurs')
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('evenement' )
            ->add('edition')
            ->add('dateDebut')
            ->add('dateFin')
            ->add('visiteurs')
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('evenement' )
            ->add('edition')
            ->add('dateDebut')
            ->add('dateFin')
            ->add('visiteurs')
        ;
    }
}

