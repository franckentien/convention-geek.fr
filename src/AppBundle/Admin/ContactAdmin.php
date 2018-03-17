<?php

// src/Admin/ContactAdmin.php
namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\CoreBundle\Form\Type\DateTimePickerType;

class ContactAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper//->add('id')
            ->add('name')
            ->add('email')
            ->add('message')
            ->add('note')
            ->add('date', DateTimePickerType::class)
            ->add('sources');
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('id')
            ->add('name')
            ->add('email')
            ->add('message')
            ->add('note')
            ->add('date')
            ->add('sources');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('id')
            ->add('name')
            ->add('email')
            ->add('message')
            ->add('note')
            ->add('date')
            ->add('sources');
    }
}
