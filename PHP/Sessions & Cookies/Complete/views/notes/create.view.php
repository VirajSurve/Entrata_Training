 
<?php require base_path('views/partials/head.php') ?>

<?php require base_path('views/partials/nav.php') ?>

<?php require base_path('views/partials/banner.php') ?>

<main>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-base font-semibold leading-6 text-gray-900">Create Note</h3>
          <p class="mt-1 text-sm text-gray-600">Write something worth remembering.</p>
        </div>

        <div class="mt-5 md:col-span-2 md:mt-0">
          <form method="POST" action="/notes">
            <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div>
                <label for="body" class="block text-sm font-medium leading-6 text-gray-900">About</label>
                <div class="mt-2">
                  <textarea id="body" name="body" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required><?= htmlspecialchars($_POST['body'] ?? '') ?></textarea>
                </div>

                <?php if (isset($errors['body'])) : ?>
                  <p class="mt-2 text-sm text-red-600"><?= htmlspecialchars($errors['body']) ?></p>
                <?php endif; ?>
              </div>
            </div>

            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</main>

<?php require base_path('views/partials/foot.php') ?>