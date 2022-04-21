<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<ul>
    <?php foreach($arResult as $arItem): ?>
        <li class="menu-item_burger"><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
    <? endforeach; ?>
</ul>
