<x-layouts.master>
    <x-slot name="title">
        {{ $title }}
    </x-slot>

    @if(config('config.website.enabled'))
        <x-layouts.header activePage="{{ $slug }}" />
    @endif

    <x-layouts.subheader heading="{{ $title }}" />

    <main id="main">

        <section class="default-template">
            <div class="container" data-aos="fade-up">
                {!! $body !!}
            </div>
        </section>

    </main><!-- End #main -->

    <x-layouts.footer />

</x-layouts.master>
