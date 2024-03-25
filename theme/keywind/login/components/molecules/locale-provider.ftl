<#import "/assets/icons/chevron-down.ftl" as icon>
<#import "/components/atoms/link.ftl" as link>

<#macro kw currentLocale="" locales=[]>
  <div class="relative" x-data="{ open: false }">
    <@link.kw @click="open = true" component="button" type="button">
      <div class="flex items-center text-stone-500">
        <span class="mr-1 text-sm">${currentLocale}</span>
        <@icon.kw />
      </div>
    </@link.kw>
    <div
      @click.away="open = false"
      class="absolute bg-stone-200 dark:bg-stone-800 text-stone-500 dark:text-stone-500 bottom-0 -left-4 max-h-80 mb-6 overflow-y-scroll rounded-none shadow-none"
      x-cloak
      x-show="open"
    >
      <#list locales as locale>
        <#if currentLocale != locale.label>
          <div class="px-4 py-2">
            <@link.kw href=locale.url size="small">
              ${locale.label}
            </@link.kw>
          </div>
        </#if>
      </#list>
    </div>
  </div>
</#macro>
