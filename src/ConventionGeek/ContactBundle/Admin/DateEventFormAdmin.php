<?php

// src/Admin/ContactAdmin.php
namespace ConventionGeek\ContactBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\CoreBundle\Form\Type\DatePickerType;

class DateEventFormAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('Édition', ['class' => 'col-md-4'])
                ->add('evenement')
                ->add('edition')
            ->end()
            ->with('Date', ['class' => 'col-md-4'])
                ->add('dateDebut', DatePickerType::class , array('dp_view_mode' => 'months',))
                ->add('dateFin', DatePickerType::class, array('dp_view_mode' => 'months',))
            ->end()
            ->with('Details', ['class' => 'col-md-4'])
                ->add('visiteurs')
                ->add('informateur')
            ->end();
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

