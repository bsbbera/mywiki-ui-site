---
title: Convolutional Neural Networks
Created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - CNN
  - Convolutional Neural Networks
  - Convolution
  - Pooling
  - ResNet
  - LeNet
  - AlexNet
  - Computer Vision
category: Machine Learning
tags:
  - MachineLearning
  - DeepLearning
  - CNN
  - ComputerVision
  - NeuralNetworks
banner: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1400
cssclass: wide-page
publish: true
---

---

> "What neural networks can do is learn features automatically, and CNNs learn spatial hierarchies of features."
> <cite>— François Chollet</cite>

---

<span class="at-kicker">Computer Vision · Deep Learning</span>

# Convolutional Neural Networks

<p class="at-lead">
Convolutional Neural Networks are deep networks designed for grid-like data — primarily images — that exploit the spatial structure of nearby pixels through shared, reusable filters. Rather than learning independent weights per pixel, CNNs learn small filters that detect the same patterns anywhere in the image (translation equivariance), making them dramatically more parameter-efficient and accurate than fully-connected networks for vision tasks.
</p>

<span class="at-stat">convolution</span> &nbsp;·&nbsp; <span class="at-stat">pooling</span> &nbsp;·&nbsp; <span class="at-stat">skip connections</span> &nbsp;·&nbsp; <span class="at-mark">filters learn spatial hierarchies — edges → shapes → objects — layer by layer</span>

<span class="at-kicker">How It Works</span>

## Overview

A 224×224 RGB image has 150,528 input features. A fully-connected layer with 1,000 neurons needs **150 million weights** — most learning nothing useful. A CNN with 3×3 convolutions shares weights spatially, reducing parameters by orders of magnitude while learning **translation-invariant** patterns.

CNNs exploit three key properties of visual data:
- **Local connectivity** — nearby pixels are more related than distant ones.
- **Parameter sharing** — the same filter (e.g., an edge detector) is useful everywhere in the image.
- **Hierarchical structure** — early layers detect edges, middle layers detect shapes, deep layers detect objects.

<span class="at-kicker">Core Operations</span>

## Core building blocks

### Convolution operation

A **filter** (or kernel) slides over the input, computing dot products at each position:

```
Input (5×5)          Filter (3×3)         Output (3×3)
┌─────┬─────┬─────┬─────┬─────┐    ┌───┬───┬───┐    ┌───┬───┬───┐
│ 1   │ 1   │ 1   │ 0   │ 0   │    │ 1 │ 0 │ 1 │    │ 4 │ 3 │ 4 │
├─────┼─────┼─────┼─────┼─────┤    ├───┼───┼───┤    ├───┼───┼───┤
│ 0   │ 1   │ 1   │ 1   │ 0   │    │ 0 │ 1 │ 0 │    │ 2 │ 4 │ 3 │
├─────┼─────┼─────┼─────┼─────┤    ├───┼───┼───┤    ├───┼───┼───┤
│ 0   │ 0   │ 1   │ 1   │ 1   │    │ 1 │ 0 │ 1 │    │ 2 │ 3 │ 4 │
├─────┼─────┼─────┼─────┼─────┤    └───┴───┴───┘    └───┴───┴───┘
│ 0   │ 0   │ 1   │ 1   │ 0   │
├─────┼─────┼─────┼─────┼─────┤
│ 0   │ 1   │ 1   │ 0   │ 0   │
└─────┴─────┴─────┴─────┴─────┘
```

> [!example] Manual convolution
> For the position top-left of the output: the 3×3 patch `[[1,1,1],[0,1,1],[0,0,1]]` multiplied element-wise by the filter `[[1,0,1],[0,1,0],[1,0,1]]` gives products `[1,0,1, 0,1,0, 0,0,1]`, summed = **4**. This matches the output matrix entry `[0,0]`.

### Output size formula

$$\text{Output size} = \left\lfloor \frac{W - K + 2P}{S} \right\rfloor + 1$$

Where $W$ = input size, $K$ = kernel size, $P$ = padding, $S$ = stride.

> [!tip] Quick calculation
> Input: 32×32, Kernel: 3×3, Stride: 1, Padding: 1 → Output: $\frac{32-3+2}{1}+1 = 32$ (same size!)
> Input: 32×32, Kernel: 3×3, Stride: 2, Padding: 0 → Output: $\lfloor\frac{32-3}{2}\rfloor+1 = 15$ (halved).

### Pooling

Reduces spatial dimensions, providing **translation invariance** and reducing computation.

| Pooling | Operation | Typical size |
| --- | --- | --- |
| **Max pooling** | Take maximum in window | 2×2, stride 2 (halves dimensions) |
| **Average pooling** | Take mean in window | 2×2, stride 2 |
| **Global average pooling** | Average entire feature map | Used before final classifier |

> [!warning] Pooling controversy
> Some modern architectures (e.g., ResNet, EfficientNet) avoid pooling and use strided convolutions instead. Geoffrey Hinton has argued pooling is a "blunder." Yet it remains effective and widely used.

<span class="at-kicker">Architecture Design</span>

## CNN architecture in PyTorch

A well-designed CNN stacks convolution → batch norm → activation → pooling blocks, progressively shrinking spatial size while expanding channel depth:

> [!example] LeNet-5 structure
> LeNet-5 (1998) processes 32×32 grey images through two conv+pool blocks (learning edge and shape detectors), then three fully-connected layers for classification. Its flow: `Conv(1→6, 5×5) → Pool(2×2) → Conv(6→16, 5×5) → Pool(2×2) → Flatten → FC(400→120) → FC(120→84) → FC(84→10)`.

> [!example] Modern CNN with batch norm
> A modern variant replaces the old fully-connected classifier with **global average pooling**, dramatically reducing parameters:
> ```python
> self.features = nn.Sequential(
>     nn.Conv2d(3, 64, 3, padding=1), nn.BatchNorm2d(64), nn.ReLU(inplace=True),
>     nn.Conv2d(64, 64, 3, padding=1), nn.BatchNorm2d(64), nn.ReLU(inplace=True),
>     nn.MaxPool2d(2, 2),
>     nn.Conv2d(64, 128, 3, padding=1), nn.BatchNorm2d(128), nn.ReLU(inplace=True),
>     nn.MaxPool2d(2, 2),
> )
> self.classifier = nn.Sequential(
>     nn.AdaptiveAvgPool2d((1, 1)),   # global average pooling
>     nn.Flatten(),
>     nn.Linear(128, num_classes)
> )
> ```
> This design has ~1.2M parameters — tiny compared to ResNet-50's 25M — yet effective for CIFAR-10.

> [!tip] Parameter count rule
> Each `Conv2d(C_in, C_out, K)` layer has $K^2 \times C_{in} \times C_{out} + C_{out}$ parameters. Global average pooling before the final `Linear` layer eliminates the large FC bottleneck.

<span class="at-kicker">Landmark Architectures</span>

## Modern architectures

| Architecture | Year | Key innovation | ImageNet top-1 |
| --- | --- | --- | --- |
| **LeNet** | 1998 | First successful CNN (handwritten digits) | — |
| **AlexNet** | 2012 | ReLU, dropout, GPU training; 8 layers | 57.1% |
| **VGGNet** | 2014 | Deep, uniform 3×3 convolutions; 16–19 layers | 71.5% |
| **ResNet** | 2015 | **Skip connections** enable 152+ layers | 76.1% |
| **Inception** | 2014 | Multi-scale filters in parallel (1×1, 3×3, 5×5) | 78.8% |
| **DenseNet** | 2017 | Dense connections: each layer feeds all subsequent | 77.3% |
| **MobileNet** | 2017 | Depthwise separable convolutions; mobile-optimised | 70.6% |
| **EfficientNet** | 2019 | **Compound scaling** of depth, width, resolution | 84.3% |

> [!grid|cols3]
>
>> [!card|section]
>> ###### 1998 · LENET
>> ### *LeNet-5* — Pioneer
>> First successful CNN for handwritten digit recognition. Introduced the conv-pool-conv-pool-FC pattern that all subsequent architectures followed. Trained on 32×32 greyscale MNIST images.
>
>> [!card|section]
>> ###### 2012 · ALEXNET
>> ### *AlexNet* — Breakthrough
>> Won ImageNet 2012 by a 10% margin. Introduced ReLU activations, dropout regularisation, and GPU training to the mainstream. Sparked the deep learning renaissance in computer vision.
>
>> [!card|section]
>> ###### 2015 · RESNET
>> ### *ResNet* — Depth Enabler
>> Skip connections solved the vanishing gradient problem for very deep networks. ResNet-152 (152 layers) was trained successfully — unthinkable before 2015. Now the backbone of choice for most vision tasks.

<span class="at-kicker">Skip Connections</span>

## ResNet: skip connections

The vanishing gradient problem made training networks deeper than ~20 layers nearly impossible. ResNet solved this with **residual blocks**:

$$y = F(x) + x$$

Instead of learning $y$ directly, the network learns the **residual** $F(x) = y - x$. If the optimal mapping is identity, the network can simply push $F(x)$ toward zero — much easier than learning identity through many non-linear layers.

```python
class ResidualBlock(nn.Module):
    def __init__(self, channels):
        super().__init__()
        self.conv1 = nn.Conv2d(channels, channels, 3, padding=1)
        self.bn1   = nn.BatchNorm2d(channels)
        self.conv2 = nn.Conv2d(channels, channels, 3, padding=1)
        self.bn2   = nn.BatchNorm2d(channels)

    def forward(self, x):
        out = F.relu(self.bn1(self.conv1(x)))
        out = self.bn2(self.conv2(out))
        return F.relu(out + x)          # skip connection
```

> [!example] ResNet depth milestone
> - ResNet-18: 18 layers, 11.7M params
> - ResNet-50: 50 layers, 25.6M params (bottleneck blocks)
> - ResNet-152: 152 layers, 60.2M params
> - ResNet-1000+ has been trained successfully — unthinkable before 2015.

<span class="at-kicker">Practical Application</span>

## Transfer learning with pre-trained CNNs

Pre-trained CNNs (trained on ImageNet) can be adapted to new tasks with minimal data:

```python
resnet = models.resnet50(pretrained=True)
for param in resnet.parameters():
    param.requires_grad = False            # freeze backbone

resnet.fc = nn.Linear(resnet.fc.in_features, 10)   # new head for 10 classes
optimizer = optim.Adam(resnet.fc.parameters(), lr=1e-3)
```

> [!info] When to use transfer learning
> - **Small dataset** (<10K images) → freeze backbone, train only the new head.
> - **Medium dataset** (10K–100K) → fine-tune last few convolutional blocks with small LR.
> - **Large dataset, similar domain** → full fine-tune with very small global LR.
> - **Large dataset, different domain** → train from scratch or use progressive unfreezing.

> [!grid|cols4]
>
>> [!card|hero dark spanfull]
>> ###### CNN IN PRACTICE
>> # From *raw pixels* to *accurate predictions*.
>> Build CNNs that learn spatial hierarchies and transfer knowledge from ImageNet to your domain.
>
>> [!card|step]
>> ###### Step 01
>> ### *Design* the architecture.
>> Choose backbone: ResNet-50 for general vision, EfficientNet-B0 for efficiency, MobileNet for edge deployment. Add global average pooling before the classifier head to reduce parameter count.
>
>> [!card|step]
>> ###### Step 02
>> ### *Pre-process* your images.
>> Resize to 224×224. Normalise with ImageNet mean/std `([0.485,0.456,0.406], [0.229,0.224,0.225])`. Apply training augmentations: random crop, flip, colour jitter. Use `torchvision.transforms`.
>
>> [!card|step]
>> ###### Step 03
>> ### *Transfer* or train.
>> Load `pretrained=True` backbone. Freeze backbone layers. Replace final FC with task-specific head. Train head first (few epochs), then optionally fine-tune last blocks with 10× smaller LR.

<span class="at-kicker">Interview Preparation</span>

## Interview questions

1. Why are CNNs more parameter-efficient than fully-connected networks for image data?
2. What is translation equivariance, and how does convolution achieve it?
3. Explain the output size formula — how does padding preserve spatial dimensions?
4. What is the vanishing gradient problem, and how do ResNet's skip connections solve it?
5. What is global average pooling, and why is it preferred over a large FC layer at the end?
6. What is the difference between max pooling and average pooling? When would you use each?
7. How does transfer learning work for CNNs? What determines whether to freeze or fine-tune?

<span class="at-kicker">Continue Reading</span>

## Related pages

> [!grid]
>
>> [!card] Deep Learning
>> [[deep-learning|Deep Learning]], [[neural-networks|Neural Networks]], [[optimisation-algorithms|Optimisation Algorithms]]
>
>> [!card] Training
>> [[regularisation-training|Regularisation & Training]], [[transfer-learning|Transfer Learning]]
>
>> [!card] Vision Tasks
>> [[../nlp/computer-vision|Computer Vision Tasks]], [[../nlp/object-detection|Object Detection]]
