jQuery(function($) {
      $("#rss-feeds").rss("https://medium.com/feed/@ant.blondeauw",
      {
        entryTemplate:'<article><a class="image">{teaserImage}</a><div class="inner"><h4><a href="{url}">{title}</a></h4><p>{shortBodyPlain}</p><p>{author}, {date}</p></div></article>',
        ssl: true
      })
})
