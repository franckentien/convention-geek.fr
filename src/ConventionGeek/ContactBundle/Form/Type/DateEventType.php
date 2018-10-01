<?php

namespace ConventionGeek\ContactBundle\Form\Type;

use Application\Sonata\UserBundle\Entity\User;
use ConventionGeek\EventBundle\Entity\Convention;
use ConventionGeek\EventBundle\Entity\DateEvent;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DateEventType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('evenement', EntityType::class, array(
                // looks for choices from this entity
                'class' => Convention::class,

                // uses the User.username property as the visible option string
                'choice_label' => 'nom',

                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->orderBy('u.nom', 'ASC');
                },
            ))
            ->add('edition', IntegerType::class)
            ->add('dateDebut', DateType::class,
                array(
                    // renders it as a single text box
                    'widget' => 'single_text',
                )
            )
            ->add('dateFin', DateType::class,
                array(
                    // renders it as a single text box
                    'widget' => 'single_text',
                )
            )
            ->add('visiteurs', IntegerType::class,
                array('required' => false)
            )
            ->add('informateurtext', HiddenType::class,
                array('required' => false)
            )
            ->add('FormSubmit',SubmitType::class);
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'ConventionGeek\ContactBundle\Entity\DateEventForm'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'contactbundle_dateevent';
    }


}
