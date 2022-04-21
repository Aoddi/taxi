<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<ul>
    <?php foreach($arResult as $arItem): ?>
        <li class="menu-item"><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
    <?php endforeach; ?>
</ul>
