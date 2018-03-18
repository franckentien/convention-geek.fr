<?php
/**
 * Created by PhpStorm.
 * User: franckentien
 * Date: 3/18/2018
 * Time: 11:40 AM
 */

namespace ConventionGeek\EventBundle\Utils;


class DateFormatClass
{

    private static function getFullMonth($month){
        $rst="";
        switch ($month){
            case 1:
                $rst = "janvier";
                break;
            case 2:
                $rst = "février";
                break;
            case 3:
                $rst = "mars";
                break;
            case 4:
                $rst = 'avril';
                break;
            case 5:
                $rst = 'mai';
                break;
            case 6:
                $rst = "juin";
                break;
            case 7:
                $rst = "juillet";
                break;
            case 8:
                $rst = "août";
                break;
            case 9:
                $rst = 'septembre';
                break;
            case 10:
                $rst = 'octobre';
                break;
            case 11:
                $rst = 'novembre';
                break;
            case 12:
                $rst = 'décembre';
                break;
        }
        return $rst;
    }

    private static function getShortMonth($month){
        $rst="";
        switch ($month){
            case 1:
                $rst = "janv.";
                break;
            case 2:
                $rst = "fév.";
                break;
            case 3:
                $rst = "mars";
                break;
            case 4:
                $rst = 'avril';
                break;
            case 5:
                $rst = 'mai';
                break;
            case 6:
                $rst = "juin";
                break;
            case 7:
                $rst = "juil.";
                break;
            case 8:
                $rst = "août";
                break;
            case 9:
                $rst = 'sept.';
                break;
            case 10:
                $rst = 'oct.';
                break;
            case 11:
                $rst = 'nov.';
                break;
            case 12:
                $rst = 'déc.';
                break;
        }
        return $rst;
    }

    public static function getDisplayDate($DateDebut, $DateFin){

        $jourFin = date_format($DateFin, 'd');
        $moisFin = date_format($DateFin, 'm');
        $anneeFin = date_format($DateFin, 'Y');


        $rst = "";
        if($DateDebut == null){ // If the date is not sure

            if($moisFin == 1  && $jourFin == 1 ){ // Year Only
                $rst = $anneeFin;
            }
            else { // Year an month
                $rst = self::getFullMonth($moisFin) . " " . $anneeFin;
            }

        }
        else{ // Le jour exacte de debut et de fin
            $jourDebut = date_format($DateDebut, 'd');
            $moisDebut = date_format($DateDebut, 'm');
            $anneeDebut = date_format($DateDebut, 'Y');

            if($anneeDebut != $anneeFin){ // Sur deux Ans
                $rst = $jourDebut . " " . self::getShortMonth($moisDebut) . " " . $anneeDebut .
                    "- " . $jourFin . " " . self::getShortMonth($moisFin) . " " . $anneeFin;
            }
            elseif ($moisDebut != $moisFin){ //Sur deux mois
                $rst = $jourDebut . " " . self::getShortMonth($moisDebut) . "-"
                    . $jourFin . " " . self::getShortMonth($moisFin) . " " . $anneeFin;
            }
            elseif($jourDebut != $jourFin){//Sur plusieur jours
                $rst = $jourDebut . "-" .$jourFin . " " . self::getFullMonth($moisFin) . " " . $anneeFin;
            }
            else{//sur un seul jour
                $rst = $jourFin . " " . self::getFullMonth($moisFin) . " " . $anneeFin;
            }

        }

        return $rst;
    }
}