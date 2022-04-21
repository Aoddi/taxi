<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?=$APPLICATION->ShowTitle()?></title>
    <link rel="shortcut icon" type="image/svg" href="<?=SITE_TEMPLATE_PATH?>/images/favicon/favicon.svg"/>
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/style.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!--    <link rel="stylesheet" href="./css/aos.css">-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <?php $APPLICATION->ShowHead()?>
</head>
<body>
<?php $APPLICATION->ShowPanel()?>
<header class="header-wrapper">
    <div class="container header-container">
        <div class="header-logo animate__animated animate__lightSpeedInLeft ">
            <img src="<?=SITE_TEMPLATE_PATH?>/images/logo.svg" alt="Лого">
        </div>
        <div class="header-menu">
            <?$APPLICATION->IncludeComponent(
                "bitrix:menu",
                "main",
                array(
                    "ALLOW_MULTI_SELECT" => "N",
                    "CHILD_MENU_TYPE" => "sub",
                    "DELAY" => "N",
                    "MAX_LEVEL" => "2",
                    "MENU_CACHE_GET_VARS" => array(
                    ),
                    "MENU_CACHE_TIME" => "3600",
                    "MENU_CACHE_TYPE" => "A",
                    "MENU_CACHE_USE_GROUPS" => "Y",
                    "ROOT_MENU_TYPE" => "top",
                    "USE_EXT" => "Y",
                    "COMPONENT_TEMPLATE" => "main"
                ),
                false
            );?>

            <a class="roundBtn" href="tel:<?=$arContacts['TEL']['VALUE']?>"><?=$arContacts['TEL']['DISPLAY_VALUE']?></a>
            <div class="burger">
                <input type="checkbox" id="active">
                <label for="active" class="menu-btn"><span></span></label>
                <label for="active" class="close"></label>
                <div class="wrapper">
                    <?$APPLICATION->IncludeComponent(
                        "bitrix:menu",
                        "burger",
                        array(
                            "ALLOW_MULTI_SELECT" => "N",
                            "CHILD_MENU_TYPE" => "sub",
                            "DELAY" => "N",
                            "MAX_LEVEL" => "2",
                            "MENU_CACHE_GET_VARS" => array(
                            ),
                            "MENU_CACHE_TIME" => "3600",
                            "MENU_CACHE_TYPE" => "A",
                            "MENU_CACHE_USE_GROUPS" => "Y",
                            "ROOT_MENU_TYPE" => "top",
                            "USE_EXT" => "Y",
                            "COMPONENT_TEMPLATE" => "main"
                        ),
                        false
                    );?>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- modals -->
<div id="modal-container">
    <div class="modal-background">
        <div class="modal">
            <div class="container">
                <div class="closeModal"></div>
                <h2 id="modal_title">inner</h2>
                <p id="modal_text">inner</p>
            </div>
        </div>
    </div>
</div>