import React, { useEffect, useState } from "react";
import BarChart from "../../components/BarChart/barChart";
import _ from "lodash";
import classes from "./chartContainer.module.css";
import ExplainBox from "../../components/ExplainBox/explainBox";

//comment this constants
const unique = {
    chartdata: [
    {
        "title": "hr",
        "data": [
            4.0,
            46.0,
            4.0,
            48.0,
            49.0,
            50.0,
            51.0,
            52.0,
            53.0,
            54.0,
            55.0,
            56.0,
            57.0,
            58.0,
            59.0,
            6.0,
            61.0,
            62.0,
            63.0,
            64.0,
            65.0,
            66.0,
            67.0,
            68.0,
            69.0,
            7.0,
            71.0,
            72.0,
            73.0,
            74.0,
            75.0,
            76.0,
            77.0,
            78.0,
            79.0,
            0.0,
            81.0,
            82.0,
            8.0,
            84.0,
            85.0,
            86.0,
            87.0,
            88.0,
            89.0,
            90.0,
            91.0,
            92.0,
            93.0,
            94.0,
            95.0,
            96.0,
            97.0,
            98.0,
            99.0,
            100.0,
            101.0,
            102.0,
            103.0,
            104.0,
            105.0,
            106.0
        ],
        "target": [
            39.6,
            39.6,
            39.6,
            39.61,
            39.77,
            39.77,
            39.77,
            39.77,
            3.77,
            39.77,
            39.77,
            39.77,
            3.71,
            39.67,
            39.67,
            39.55,
            39.55,
            39.58,
            39.6,
            3.61,
            39.61,
            39.61,
            9.61,
            39.61,
            39.61,
            39.61,
            39.63,
            9.61,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            9.58,
            39.58,
            39.58,
            39.59,
            9.6,
            39.62,
            39.6,
            39.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.58,
            39.59,
            39.59,
            9.59,
            39.59,
            39.59,
            39.59,
            39.59,
            39.59,
            9.59,
            39.59
        ]
    },
    {
        "title": "hr",
        "data": [
            4.0,
            46.0,
            4.0,
            48.0,
            49.0,
            50.0,
            51.0,
            52.0,
            53.0,
            54.0,
            55.0,
            56.0,
            57.0,
            58.0,
            59.0,
            6.0,
            61.0,
            62.0,
            63.0,
            64.0,
            65.0,
            66.0,
            67.0,
            68.0,
            69.0,
            7.0,
            71.0,
            72.0,
            73.0,
            74.0,
            75.0,
            76.0,
            77.0,
            78.0,
            79.0,
            0.0,
            81.0,
            82.0,
            8.0,
            84.0,
            85.0,
            86.0,
            87.0,
            88.0,
            89.0,
            90.0,
            91.0,
            92.0,
            93.0,
            94.0,
            95.0,
            96.0,
            97.0,
            98.0,
            99.0,
            100.0,
            101.0,
            102.0,
            103.0,
            104.0,
            105.0,
            106.0
        ],
        "target": [
            39.6,
            39.6,
            39.6,
            39.61,
            39.77,
            39.77,
            39.77,
            39.77,
            3.77,
            39.77,
            39.77,
            39.77,
            3.71,
            39.67,
            39.67,
            39.55,
            39.55,
            39.58,
            39.6,
            3.61,
            39.61,
            39.61,
            9.61,
            39.61,
            39.61,
            39.61,
            39.63,
            9.61,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            9.58,
            39.58,
            39.58,
            39.59,
            9.6,
            39.62,
            39.6,
            39.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.58,
            39.59,
            39.59,
            9.59,
            39.59,
            39.59,
            39.59,
            39.59,
            39.59,
            9.59,
            39.59
        ]
    },
    {
        "title": "hr",
        "data": [
            4.0,
            46.0,
            4.0,
            48.0,
            49.0,
            50.0,
            51.0,
            52.0,
            53.0,
            54.0,
            55.0,
            56.0,
            57.0,
            58.0,
            59.0,
            6.0,
            61.0,
            62.0,
            63.0,
            64.0,
            65.0,
            66.0,
            67.0,
            68.0,
            69.0,
            7.0,
            71.0,
            72.0,
            73.0,
            74.0,
            75.0,
            76.0,
            77.0,
            78.0,
            79.0,
            0.0,
            81.0,
            82.0,
            8.0,
            84.0,
            85.0,
            86.0,
            87.0,
            88.0,
            89.0,
            90.0,
            91.0,
            92.0,
            93.0,
            94.0,
            95.0,
            96.0,
            97.0,
            98.0,
            99.0,
            100.0,
            101.0,
            102.0,
            103.0,
            104.0,
            105.0,
            106.0
        ],
        "target": [
            39.6,
            39.6,
            39.6,
            39.61,
            39.77,
            39.77,
            39.77,
            39.77,
            3.77,
            39.77,
            39.77,
            39.77,
            3.71,
            39.67,
            39.67,
            39.55,
            39.55,
            39.58,
            39.6,
            3.61,
            39.61,
            39.61,
            9.61,
            39.61,
            39.61,
            39.61,
            39.63,
            9.61,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            9.58,
            39.58,
            39.58,
            39.59,
            9.6,
            39.62,
            39.6,
            39.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.58,
            39.59,
            39.59,
            9.59,
            39.59,
            39.59,
            39.59,
            39.59,
            39.59,
            9.59,
            39.59
        ]
    },
    {
        "title": "hr",
        "data": [
            4.0,
            46.0,
            4.0,
            48.0,
            49.0,
            50.0,
            51.0,
            52.0,
            53.0,
            54.0,
            55.0,
            56.0,
            57.0,
            58.0,
            59.0,
            6.0,
            61.0,
            62.0,
            63.0,
            64.0,
            65.0,
            66.0,
            67.0,
            68.0,
            69.0,
            7.0,
            71.0,
            72.0,
            73.0,
            74.0,
            75.0,
            76.0,
            77.0,
            78.0,
            79.0,
            0.0,
            81.0,
            82.0,
            8.0,
            84.0,
            85.0,
            86.0,
            87.0,
            88.0,
            89.0,
            90.0,
            91.0,
            92.0,
            93.0,
            94.0,
            95.0,
            96.0,
            97.0,
            98.0,
            99.0,
            100.0,
            101.0,
            102.0,
            103.0,
            104.0,
            105.0,
            106.0
        ],
        "target": [
            39.6,
            39.6,
            39.6,
            39.61,
            39.77,
            39.77,
            39.77,
            39.77,
            3.77,
            39.77,
            39.77,
            39.77,
            3.71,
            39.67,
            39.67,
            39.55,
            39.55,
            39.58,
            39.6,
            3.61,
            39.61,
            39.61,
            9.61,
            39.61,
            39.61,
            39.61,
            39.63,
            9.61,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            9.58,
            39.58,
            39.58,
            39.59,
            9.6,
            39.62,
            39.6,
            39.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.58,
            39.59,
            39.59,
            9.59,
            39.59,
            39.59,
            39.59,
            39.59,
            39.59,
            9.59,
            39.59
        ]
    },
    {
        "title": "hr",
        "data": [
            4.0,
            46.0,
            4.0,
            48.0,
            49.0,
            50.0,
            51.0,
            52.0,
            53.0,
            54.0,
            55.0,
            56.0,
            57.0,
            58.0,
            59.0,
            6.0,
            61.0,
            62.0,
            63.0,
            64.0,
            65.0,
            66.0,
            67.0,
            68.0,
            69.0,
            7.0,
            71.0,
            72.0,
            73.0,
            74.0,
            75.0,
            76.0,
            77.0,
            78.0,
            79.0,
            0.0,
            81.0,
            82.0,
            8.0,
            84.0,
            85.0,
            86.0,
            87.0,
            88.0,
            89.0,
            90.0,
            91.0,
            92.0,
            93.0,
            94.0,
            95.0,
            96.0,
            97.0,
            98.0,
            99.0,
            100.0,
            101.0,
            102.0,
            103.0,
            104.0,
            105.0,
            106.0
        ],
        "target": [
            39.6,
            39.6,
            39.6,
            39.61,
            39.77,
            39.77,
            39.77,
            39.77,
            3.77,
            39.77,
            39.77,
            39.77,
            3.71,
            39.67,
            39.67,
            39.55,
            39.55,
            39.58,
            39.6,
            3.61,
            39.61,
            39.61,
            9.61,
            39.61,
            39.61,
            39.61,
            39.63,
            9.61,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            39.58,
            9.58,
            39.58,
            39.58,
            39.59,
            9.6,
            39.62,
            39.6,
            39.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.6,
            39.6,
            9.6,
            39.58,
            39.59,
            39.59,
            9.59,
            39.59,
            39.59,
            39.59,
            39.59,
            39.59,
            9.59,
            39.59
        ]
    },
    {
        "title": "humidity",
        "data": [
            18.0,
            18.1,
            18.2,
            18.3,
            18.4,
            18.5,
            18.6,
            18.7,
            18.8,
            18.9,
            19.0,
            19.1,
            19.2,
            19.3,
            19.4,
            19.5,
            19.6,
            19.7,
            19.8,
            19.9,
            20.0,
            20.1,
            20.2,
            20.3,
            20.4,
            20.5,
            20.6,
            20.7,
            20.8,
            20.9,
            21.0,
            21.1,
            21.2,
            21.3,
            21.4,
            21.5,
            21.6,
            21.7,
            21.8,
            21.9,
            22.0,
            22.1,
            22.2,
            22.3,
            22.4,
            22.5,
            22.6,
            22.7,
            22.8,
            22.9,
            23.0,
            23.1,
            23.2,
            23.3,
            23.4,
            23.5,
            23.6,
            23.7,
            23.8,
            23.9,
            24.0,
            24.1,
            24.2,
            24.3,
            24.4,
            24.5,
            24.6,
            24.7,
            24.8,
            24.9,
            25.0,
            25.1,
            25.2,
            25.3,
            25.4,
            25.5,
            25.6,
            25.7,
            25.8,
            25.9,
            26.0,
            26.1,
            26.2,
            26.3,
            26.4,
            26.5,
            26.6,
            26.7,
            26.8,
            26.9,
            27.0,
            27.1,
            27.2,
            27.3,
            27.4,
            27.5,
            27.6,
            27.7,
            27.8,
            27.9,
            28.0,
            28.1,
            28.2,
            28.3,
            28.4,
            28.5,
            28.6,
            28.7,
            28.8,
            28.9,
            29.0,
            29.1,
            29.2,
            29.3,
            29.4,
            29.5,
            29.6,
            29.7,
            29.8,
            29.9,
            30.0,
            30.1,
            30.2,
            30.3,
            30.4,
            30.5,
            30.6,
            30.7,
            30.8,
            30.9,
            31.0,
            31.1,
            31.2,
            31.3,
            31.4,
            31.5,
            31.6,
            31.7,
            31.8,
            31.9,
            32.0,
            32.1,
            32.2,
            32.3,
            32.4,
            32.5,
            32.6,
            32.7,
            32.8,
            32.9,
            33.0,
            33.1,
            33.2,
            33.3,
            33.4,
            33.5,
            33.6,
            33.7,
            33.8,
            33.9,
            34.0,
            34.1,
            34.2,
            34.3,
            34.4,
            34.5,
            34.6,
            34.7,
            34.8,
            34.9,
            35.0,
            35.1,
            35.2,
            35.3,
            35.4,
            35.5,
            35.6,
            35.7,
            35.8,
            35.9,
            36.0,
            36.1,
            36.2,
            36.3,
            36.4,
            36.5,
            36.6,
            36.7,
            36.8,
            36.9,
            37.0,
            37.1,
            37.2,
            37.3,
            37.4,
            37.5,
            37.6,
            37.7,
            37.8,
            37.9,
            38.0,
            38.1,
            38.2,
            38.3,
            38.4,
            38.5,
            38.6,
            38.7,
            38.8,
            38.9,
            39.0,
            39.1,
            39.2,
            39.3,
            39.4,
            39.5,
            39.6,
            39.7,
            39.8,
            39.9,
            40.0
        ],
        "target": [
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.26,
            62.27,
            62.27,
            62.27,
            62.27,
            62.27,
            62.27,
            62.27,
            62.28,
            62.28,
            62.28,
            62.28,
            62.28,
            62.36,
            62.36,
            62.36,
            62.36,
            62.36,
            62.36,
            62.36,
            62.36,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.39,
            62.43,
            62.43,
            43.92,
            43.91,
            43.94,
            43.92,
            43.73,
            43.7,
            39.34,
            39.58,
            37.79,
            37.55,
            37.65,
            37.42,
            37.42,
            37.42,
            37.42,
            37.42,
            37.42,
            37.42,
            37.42,
            37.46,
            37.46,
            37.46,
            37.46,
            37.46,
            37.46,
            37.46,
            37.46,
            37.4,
            37.4,
            37.4,
            37.4,
            37.4,
            37.39,
            37.39,
            37.39,
            37.53,
            37.76,
            36.95,
            36.94,
            36.95,
            36.97,
            36.93,
            36.93,
            36.93,
            36.93,
            36.93,
            36.93,
            36.93,
            36.93,
            36.93,
            36.94,
            36.95,
            36.55,
            36.52,
            36.52,
            36.52,
            36.48,
            36.48,
            36.48,
            36.47,
            36.49,
            36.49,
            36.59,
            37.11,
            37.07,
            37.07,
            37.11,
            37.0,
            37.0,
            37.08,
            37.2,
            37.2,
            37.2,
            37.2,
            37.18,
            37.18,
            37.18,
            37.2,
            37.2,
            37.16,
            37.16,
            37.1,
            37.1,
            37.11,
            37.09,
            37.08,
            37.08,
            37.28,
            37.28,
            37.28,
            37.28,
            37.28,
            37.28,
            37.28,
            37.28,
            37.28,
            37.28,
            37.28,
            37.28,
            37.27,
            37.27,
            37.29,
            37.29,
            37.25,
            37.25,
            37.25,
            37.25,
            37.25,
            37.25,
            37.25,
            37.17,
            37.18,
            37.18,
            37.18,
            37.18,
            37.18,
            37.17,
            37.17
        ]
    }
    ],
    single_prediction: 35,
    explainer: { "hr": -5.5, "humidity": 6.6 }
}

const predict = {
    "single_prediction": "34.54",
    "y_predictions": {
        "hr": [
            34.5,
            34.5,
            34.5,
            34.51,
            34.51,
            34.51,
            34.51,
            34.51,
            34.51,
            34.51,
            34.5,
            34.5,
            34.46,
            34.41,
            34.42,
            34.42,
            34.42,
            34.42,
            34.45,
            34.46,
            34.46,
            34.46,
            34.46,
            34.46,
            34.46,
            34.45,
            34.49,
            34.48,
            34.53,
            34.53,
            34.53,
            34.53,
            34.53,
            34.53,
            34.53,
            34.53,
            34.53,
            34.53,
            34.54,
            34.56,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54
        ],
        "humidity": [
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.32,
            60.32,
            60.32,
            60.32,
            60.32,
            60.32,
            60.32,
            60.32,
            60.32,
            60.32,
            60.32,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.3,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.3,
            60.3,
            60.31,
            60.31,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.34,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            60.31,
            59.98,
            45.01,
            45.05,
            45.08,
            45.25,
            45.02,
            44.92,
            36.79,
            37.02,
            35.19,
            34.88,
            34.87,
            34.63,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.54,
            34.53,
            34.53,
            34.53,
            34.53,
            34.52,
            34.52,
            34.52,
            34.52,
            34.5,
            34.44,
            34.44,
            34.44,
            34.44,
            34.44,
            34.43,
            34.43,
            34.51,
            34.65,
            34.93,
            35.67,
            35.62,
            35.63,
            35.63,
            35.59,
            35.59,
            35.59,
            35.59,
            35.59,
            35.58,
            35.58,
            35.59,
            35.59,
            35.59,
            35.6,
            35.7,
            35.7,
            35.7,
            35.7,
            35.66,
            35.65,
            35.65,
            35.67,
            35.69,
            35.69,
            35.69,
            35.69,
            35.69,
            35.69,
            35.69,
            35.62,
            35.62,
            35.86,
            35.86,
            35.86,
            35.86,
            35.86,
            35.75,
            35.75,
            35.73,
            35.73,
            35.73,
            35.73,
            35.73,
            35.73,
            35.73,
            35.74,
            35.74,
            35.74,
            35.62,
            35.93,
            35.93,
            35.95,
            35.95,
            35.95,
            36.04,
            36.04,
            36.03,
            36.03,
            36.03,
            36.03,
            36.03,
            36.19,
            36.15,
            36.17,
            36.18,
            36.2,
            36.2,
            36.2,
            36.2,
            36.21,
            36.21,
            36.21,
            36.12,
            36.12,
            36.12,
            36.12,
            36.12,
            36.12,
            36.12,
            36.12
        ]
    },
    "explainer": {
        "hr": 4.2 ,
        "humidity": 4.4
    }
}

function ChartsContainer() {
    const [data, setData] = useState({});
    const [dynamicY, setDynamicY] = useState([]);
    const [selectedValues, setSelectedValues] = useState({});
    const [loading, setLoading] = useState(false);
    const [combinationResult, setCombinationResult] = useState(0);
    const [explainerData, setExplainerData] = useState()
    const getDefaultData = async () => {
        // comment this section
        let selectedVals = {};
        Object.values(unique.chartdata).forEach((item) => {
            const middleIndex = Math.floor(item.data.length / 2);
            selectedVals[item.title] = item.data[middleIndex];
        });
        setSelectedValues(selectedVals);
        setData(unique.chartdata);
        const result = parseFloat(unique.single_prediction);
        setCombinationResult(result);
        setExplainerData(unique.explainer)
        // uncomment this section
        // try {
        // // fetch("mocks/synthetic_data_sorted.json", {
        //     fetch("http://127.0.0.1:5000/uniquedata",{
        //     headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((res) => {
        //     let selectedVals = {};
        //     Object.values(res).forEach((item) => {
        //         const middleIndex = Math.floor(item.data.length / 2);
        //         selectedVals[item.title] = item.data[middleIndex];
        //     });
        //     setSelectedValues(selectedVals);
        //     setData(res.chartdata);
        //     const result = parseFloat(res.single_prediction);
        //     setCombinationResult(result);
        //     setExplainerData(res.explainer)
        //     });
        // } catch (err) {
        //     console.log(err);
        // }
    };

    const getCombinationResult = (values) => {
        
        // TODO: get combination result
        // uncomment this section
        // setLoading(true);
        // fetch("http://127.0.0.1:5000/predictchart", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: JSON.stringify(values),
        // })
        // .then((res) => res.json())
        // .then((res) => {
        //     const result = parseFloat(res.single_prediction);
        //     console.log(values);
        //     setCombinationResult(result);
        //     setDynamicY(res.y_predictions);
        //     setExplainerData(res.explainer)
        //     setLoading(false);
        // });
        // comment this section
        setCombinationResult(parseFloat(predict.single_prediction))
        setDynamicY(predict.y_predictions)
        setExplainerData(predict.explainer)
    };

    useEffect(() => {
        getDefaultData();
        // getProductionData();
    }, []);

    const onSelectedValuesChange = (dataKey, value) => {
        let newValues = selectedValues;
        newValues[dataKey] = value;
        setSelectedValues(newValues);

        getCombinationResult(newValues);
    };

    return (
        <div className={classes.container}>
            <div className={classes.charts_section}>
                {data &&
                    Object.values(data).map((item) => (
                        <BarChart
                            selectedValues={selectedValues}
                            xData={item.data}
                            yData={dynamicY[item.title]||item.target}
                            key={item.title}
                            title={_.startCase(item.title)}
                            onSelectedValuesChange={onSelectedValuesChange}
                            dataKey={item.title}
                            loading={loading}
                            combinationResult={combinationResult}
                        />
                    ))
                }
            </div>
            <ExplainBox explainerData={explainerData} combinationResult={combinationResult}/>
        </div>
    );
}

export default ChartsContainer;