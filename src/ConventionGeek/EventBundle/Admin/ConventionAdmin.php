<?php

// src/Admin/ContactAdmin.php
namespace ConventionGeek\EventBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class ConventionAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper->add('id')
            ->add('nom')
            ->add('site')
            ->add('facebook')
            ->add('twitter')
            ->add('lieu')
            ->add('departement')
            ->add('meta')
            ->add('description')
            ->add('actif')
            ->add('email')
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('id')
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
        $listMapper->addIdentifier('id')
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

