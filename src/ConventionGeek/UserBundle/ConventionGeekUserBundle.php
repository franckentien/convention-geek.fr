<?php

namespace ConventionGeek\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class ConventionGeekUserBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
