"use client";

import { useEffect } from "react";

// Определяем тип для конфигурации теста
type TestConfig = {
  id: string;
  variants: string[];
  weights: number[];
};

// Определяем тип для элементов testValues
type TestValue = {
  id: string;
  value: string;
};

const ABTestScript = () => {
  useEffect(() => {
    const ROISTAT_AB_COOKIE = "roistat_ab";
    const ROISTAT_AB_SUBMITTED_COOKIE = "roistat_ab_submit";
    const COOKIE_EXPIRE = 30*7 * 24 * 60 * 60;
    const COOKIE_CONFIG = { expires: COOKIE_EXPIRE, path: "/" };

    const testsConfig: TestConfig[] = [
      {
        id: "homePageAB",
        variants: ["new", "old"],
        weights: [0.9, 0.1], // 90% для "a", 10% для "b"
      },
    ];

    // Явно указываем тип для testValues
    const testValues: TestValue[] = [];
    // Явно указываем тип для roistatAbCookieValues
    const roistatAbCookieValues: string[] = [];

    if (getCookieValue(ROISTAT_AB_SUBMITTED_COOKIE) !== "1") {
      for (let i = 0; i < testsConfig.length; i++) {
        const testId = testsConfig[i].id;
        let testValue = getCookieValue(testId);

        if (typeof testValue === "undefined") {
          // Взвешенный выбор варианта
          testValue = weightedRandom(testsConfig[i].variants, testsConfig[i].weights);
          setCookieValue(testId, testValue, COOKIE_CONFIG);
        }

        // Убедимся, что testValue — строка
        if (testValue) {
          testValues.push({ id: testId, value: testValue });
        }
      }

      for (let i = 0; i < testValues.length; i++) {
        roistatAbCookieValues.push(`${testValues[i].id}:${testValues[i].value}`);
      }

      setCookieValue(ROISTAT_AB_COOKIE, roistatAbCookieValues.join(","), COOKIE_CONFIG);
      setCookieValue(ROISTAT_AB_SUBMITTED_COOKIE, "1", COOKIE_CONFIG);
    }

    // Функция для взвешенного случайного выбора
    function weightedRandom(variants: string[], weights: number[]): string {
      const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      const random = Math.random() * totalWeight;
      let cumulativeWeight = 0;

      for (let i = 0; i < variants.length; i++) {
        cumulativeWeight += weights[i];
        if (random <= cumulativeWeight) {
          return variants[i];
        }
      }
      // Возвращаем первый вариант как запасной
      return variants[0];
    }

    function getCookieValue(name: string): string | undefined {
      const matches = document.cookie.match(
        new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
      );
      return matches ? matches[1] : undefined;
    }

    function setCookieValue(name: string, value: string, options: { expires?: number | Date; path?: string }): void {
      options = options || {};
      let expires = options.expires;

      if (typeof expires === "number" && expires) {
        const d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = d; // Сохраняем объект Date
      }

      value = encodeURIComponent(value);
      let updatedCookie = name + "=" + value;

      for (const propName in options) {
        updatedCookie += "; " + propName;
        const propValue = options[propName];
        if (propValue !== true) {
          // Если это expires и это объект Date, используем toUTCString
          if (propName === "expires" && propValue instanceof Date) {
            updatedCookie += "=" + propValue.toUTCString();
          } else {
            updatedCookie += "=" + propValue;
          }
        }
      }

      document.cookie = updatedCookie;
    }
  }, []);

  return null;
};

export default ABTestScript;