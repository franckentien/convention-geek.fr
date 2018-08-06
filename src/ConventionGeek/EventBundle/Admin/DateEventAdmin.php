<?php

// src/Admin/ContactAdmin.php
namespace ConventionGeek\EventBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\CoreBundle\Form\Type\DatePickerType;

class DateEventAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper->add('evenement')
            ->add('edition')
            ->add('dateDebut', DatePickerType::class , array('dp_view_mode' => 'months',))
            ->add('dateFin', DatePickerType::class, array('dp_view_mode' => 'months',))
            ->add('visiteurs')
            ->add('informateur')
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('evenement' )
            ->add('edition')
            ->add('dateDebut')
            ->add('dateFin')
            ->add('visiteurs')
            ->add('informateur')
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('evenement' )
            ->add('edition')
            ->add('dateDebut')
            ->add('dateFin')
            ->add('visiteurs')
            ->add('informateur')
        ;
    }
}

