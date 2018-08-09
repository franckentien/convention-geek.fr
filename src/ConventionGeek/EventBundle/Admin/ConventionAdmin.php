<?php

// src/Admin/ContactAdmin.php
namespace ConventionGeek\EventBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class ConventionAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('Informations', ['class' => 'col-md-8'])
                ->add('eventid')
                ->add('nom')
                ->add('lieu')
                ->add('departement')
                ->add('meta')
                ->add('description')
            ->end()
            ->with('Liens', ['class' => 'col-md-4'])
                ->add('actif')
                ->add('site')
                ->add('facebook')
                ->add('twitter')
                ->add('email')
            ->end();
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('eventid')
            ->add('nom')
            ->add('site')
            ->add('facebook')
            ->add('twitter')
            ->add('lieu')
            ->add('departement')
            ->add('meta')
            ->add('description')
            ->add('actif')
            ->add('email');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('eventid')
            ->add('nom')
            ->add('site')
            ->add('facebook')
            ->add('twitter')
            ->add('lieu')
            ->add('departement')
            ->add('meta')
            ->add('description')
            ->add('actif')
            ->add('email');
    }
}

