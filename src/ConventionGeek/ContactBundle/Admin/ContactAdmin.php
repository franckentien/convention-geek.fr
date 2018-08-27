<?php

// src/Admin/ContactAdmin.php
namespace ConventionGeek\ContactBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\CoreBundle\Form\Type\DateTimePickerType;

class ContactAdmin extends AbstractAdmin
{
    public $supportsPreviewMode = true;

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('Message', ['class' => 'col-md-8'])
                ->add('name')
                ->add('email')
                ->add('message')
            ->end()
            ->with('Admin', ['class' => 'col-md-4'])
                ->add('date', DateTimePickerType::class)
                ->add('sources')
                ->add('note')
            ->end();
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
