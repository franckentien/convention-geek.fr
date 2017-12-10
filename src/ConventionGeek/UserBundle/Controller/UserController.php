<?php

namespace ConventionGeek\UserBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UserController extends Controller
{
    public function deleteUserAction() {

        if( $this->container->get( 'security.authorization_checker' )->isGranted( 'IS_AUTHENTICATED_FULLY' ) )
        {
            $user = $this->container->get('security.token_storage')->getToken()->getUser();
            $userManager = $this->container->get('fos_user.user_manager');
            $userManager->deleteUser($user);
            $this->get('session')->getFlashBag()->add('success',  'Au revoir ' . $user->getUsername() . ', votre compte a bien été supprimé. ');
            return $this->redirect($this->generateUrl('fos_user_registration_register'));
        }
        else{
            $this->get('session')->getFlashBag()->add('error',  'Vous devez etre connecté pour suprimer votre compte.');
            return $this->redirect($this->generateUrl('fos_user_security_login'));
        }



    }
}
